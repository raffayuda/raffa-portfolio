"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const LoginPage = () => {
  const router = useRouter();
  type FormData = {
    username: string;
    password: string;
  };
  const initialForm: FormData = {
    username: "",
    password: "",
  };
  const [form, setForm] = useState<FormData>(initialForm);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch users from the API route instead of using Prisma directly
    fetch('/api/auth')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch users');
        return response.json();
      })
      .then(data => {
        setUsers(data.users || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching users:', err);
        setError('Failed to load users');
        setLoading(false);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        setError(data.error || 'Login failed');
        return;
      }
      
      console.log('Login successful:', data);
      router.push('/');
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred during login');
    }
  };
  console.log(users);
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="bg-white rounded-md p-4 w-1/2 h-1/2 text-black flex items-center">
        
        <div className="w-full">
          <h1 className="text-2xl font-bold text-center">Login Admin</h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form
            onSubmit={handleSubmit}
            action=""
            className="mx-auto w-1/2 flex flex-col gap-6"
          >
            <div>
              <label htmlFor="" className="block">
                Username
              </label>
              <input
                onChange={handleChange}
                name="username"
                type="text"
                className="bg-transparent border-2 border-blue-600 rounded-lg px-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="" className="block">
                Password
              </label>
              <input
                onChange={handleChange}
                name="password"
                type="password"
                className="bg-transparent border-2 border-blue-600 rounded-lg px-2 w-full"
              />
            </div>
            <button
              className="bg-blue-600 text-white py-2 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
     
    </div>
  );
};

export default LoginPage;

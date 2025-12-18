'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FormField, GradientButton } from '@/components/ui';

export default function LoginFormSection() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Login submitted:', formData);
      // Handle successful login here
    } catch {
      setErrors({ submit: 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-darkBlue-900 py-60 relative">
      <div className="absolute top-6 left-6">
        <Link className="inline-flex items-center gap-2 text-white hover:text-opacity-70 transition duration-200" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15.8334L6.66667 10L12.5 4.16669" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Back to home</span>
        </Link>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <h1 className="font-heading text-white text-4xl md:text-5xl font-bold mb-6">
            Welcome back
          </h1>
          <p className="text-white text-opacity-70 mb-10">
            Sign in to your account to continue your journey with Four Points.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {errors.submit && (
              <div className="text-red-400 text-sm">{errors.submit}</div>
            )}

            <FormField
              id="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />

            <FormField
              id="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center text-white text-sm">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                Forgot password?
              </Link>
            </div>

            <GradientButton
              type="submit"
              variant="blue"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </GradientButton>
          </form>

          <p className="text-center text-white text-opacity-70 mt-8">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-blue-400 hover:text-blue-300">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
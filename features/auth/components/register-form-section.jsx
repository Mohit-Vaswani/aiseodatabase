'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FormField, GradientButton } from '@/components/ui';

export default function RegisterFormSection() {
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
      console.log('Register submitted:', formData);
      // Handle successful registration here
    } catch {
      setErrors({ submit: 'Registration failed. Please try again.' });
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
            Create account
          </h1>
          <p className="text-white text-opacity-70 mb-10">
            Join Four Points and start your bookkeeping journey with us.
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
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
            />

            <div className="flex items-center">
              <input type="checkbox" className="mr-2" required />
              <span className="text-white text-sm">
                I agree to the{' '}
                <Link href="#" className="text-blue-400 hover:text-blue-300">
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link href="#" className="text-blue-400 hover:text-blue-300">
                  Privacy Policy
                </Link>
              </span>
            </div>

            <GradientButton
              type="submit"
              variant="blue"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create account'}
            </GradientButton>
          </form>

          <p className="text-center text-white text-opacity-70 mt-8">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-400 hover:text-blue-300">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
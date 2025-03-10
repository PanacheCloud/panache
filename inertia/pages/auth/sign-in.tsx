import { Link, useForm } from '@inertiajs/react'
import { AuthLayout } from '~/components/auth/auth-layout'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/card'
import { Input } from '~/components/input'
import { Label } from '~/components/label'
import { Error } from '~/components/error'
import { Button } from '~/components/button'
import { ContinueWithGitHub } from '~/components/auth/continue-with-github'

export default function SignInPage() {
  const form = useForm({
    email: '',
    password: '',
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    form.post('/auth/sign-in')
  }

  return (
    <AuthLayout>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Welcome back</CardTitle>
          <CardDescription className="text-center">
            Sign in to your Panache Cloud account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContinueWithGitHub />

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-neutral-500">OR</span>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                className="mt-1"
                id="email"
                name="email"
                type="email"
                placeholder="cyrano@bergerac.fr"
                value={form.data.email}
                onChange={(e) => form.setData('email', e.target.value)}
              />
              <Error errorKey="email" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                className="mt-1"
                id="password"
                name="password"
                type="password"
                placeholder="••••••••••••••"
                value={form.data.password}
                onChange={(e) => form.setData('password', e.target.value)}
              />
              <Error errorKey="password" />
            </div>
            <Button className="w-full" type="submit" loading={form.processing}>
              Sign in
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-neutral-500 text-center justify-center">
          <p>Don't have an account?</p>{' '}
          <Link
            className="ml-1 underline underline-offset-4 text-blue-700 hover:text-blue-500 transition-colors"
            href="/auth/sign-up"
          >
            Sign up
          </Link>
        </CardFooter>
      </Card>
    </AuthLayout>
  )
}

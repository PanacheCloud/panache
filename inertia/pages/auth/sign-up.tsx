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

export default function SignUpPage() {
  const form = useForm({
    fullName: '',
    email: '',
    password: '',
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    form.post('/auth/sign-up')
  }

  return (
    <AuthLayout>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Create an account</CardTitle>
          <CardDescription className="text-center">
            Start your journey with Panache Cloud.
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
              <Label htmlFor="fullName">Full name</Label>
              <Input
                className="mt-1"
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Cyrano de Bergerac"
              />
              <Error errorKey="fullName" />
            </div>
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                className="mt-1"
                id="email"
                name="email"
                type="email"
                placeholder="cyrano@bergerac.fr"
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
              />
              <Error errorKey="password" />
            </div>
            <Button className="w-full" type="submit" loading={form.processing}>
              Create account
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-neutral-500 text-center justify-center">
          <p>Already have an account?</p>{' '}
          <Link
            className="ml-1 underline underline-offset-4 text-blue-700 hover:text-blue-500 transition-colors"
            href="/auth/sign-in"
          >
            Sign in
          </Link>
        </CardFooter>
      </Card>
    </AuthLayout>
  )
}

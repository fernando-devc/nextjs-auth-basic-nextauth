'use client'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"
import { useCallback } from "react"
import { useForm } from "react-hook-form"

export function LoginForm() {

    const { handleSubmit, register } = useForm()
    const login = useCallback(async (data: any) => {
        const { email, password } = data
        const result: any = await signIn('credentials', {
            email,
            password,
            redirect: false
        })

        if (result?.error) {
            return
        }

    }, [])

    return (
        <form className="w-full max-w-sm" onSubmit={handleSubmit(login)}>
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Entre com seu usuario
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4" >
                    <div className="grid gap-2">
                        <Label htmlFor="email">Usuario</Label>
                        <Input id="email" type="text" placeholder="usuario" {...register('email')} required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Senha</Label>
                        <Input id="password" type="password" required placeholder="Senha"  {...register('password')}/>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" type="submit">Acessar</Button>
                </CardFooter>
            </Card>
        </form>
    )
}
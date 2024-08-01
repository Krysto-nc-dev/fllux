import { ZodType, z } from 'zod'

export type UserRegistrationProps = {
  type: string
  fullname: string
  email: string
  confirmEmail: string
  password: string
  confirmPassword: string
  otp: string
}

export const UserRegistrationSchema: ZodType<UserRegistrationProps> = z
  .object({
    type: z.string().min(1),
    fullname: z
      .string()
      .min(4, { message: 'Votre nom complet doit contenir au moins 4 caractères' }),
    email: z.string().email({ message: 'Format d\'email incorrect' }),
    confirmEmail: z.string().email(),
    password: z
      .string()
      .min(8, { message: 'Votre mot de passe doit contenir au moins 8 caractères' })
      .max(64, {
        message: 'Votre mot de passe ne peut pas dépasser 64 caractères',
      })
      .refine(
        (value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ''),
        'Le mot de passe ne doit contenir que des lettres et des chiffres'
      ),
    confirmPassword: z.string(),
    otp: z.string().min(6, { message: 'Vous devez entrer un code de 6 chiffres' }),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  })
  .refine((schema) => schema.email === schema.confirmEmail, {
    message: 'Les emails ne correspondent pas',
    path: ['confirmEmail'],
  })

export type UserLoginProps = {
  email: string
  password: string
}

export type ChangePasswordProps = {
  password: string
  confirmPassword: string
}

export const UserLoginSchema: ZodType<UserLoginProps> = z.object({
  email: z.string().email({ message: 'Vous n\'avez pas entré un email valide' }),
  password: z
    .string()
    .min(8, { message: 'Votre mot de passe doit contenir au moins 8 caractères' })
    .max(64, {
      message: 'Votre mot de passe ne peut pas dépasser 64 caractères',
    }),
})

export const ChangePasswordSchema: ZodType<ChangePasswordProps> = z
  .object({
    password: z
      .string()
      .min(8, { message: 'Votre mot de passe doit contenir au moins 8 caractères' })
      .max(64, {
        message: 'Votre mot de passe ne peut pas dépasser 64 caractères',
      })
      .refine(
        (value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ''),
        'Le mot de passe ne doit contenir que des lettres et des chiffres'
      ),
    confirmPassword: z.string(),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  })

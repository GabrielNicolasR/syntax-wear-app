import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { isValidCPF } from "../../utils/cpf.validator";


export const registerUserFormSchema = z
    .object({
        firstName: z
            .string()
            .nonempty("Primeiro nome é obrigatório"),

        lastName: z
            .string()
            .nonempty("Último nome é obrigatório"),

        email: z
            .email("E-mail inválido"),


        password: z
            .string()
            .min(8, "A senha deve ter no mínimo 8 caracteres")
            .regex(
                /[!@#$%^&*(),.?":{}|<>]/,
                "A senha deve conter ao menos um caractere especial"
            ),

        confirmPassword: z
            .string()
            .nonempty("Confirmação de senha é obrigatória"),

        cpf: z
            .string()
            .nonempty("CPF é obrigatório")
            .refine((cpf) => isValidCPF(cpf), {
                message: "CPF inválido",
            }),

        birthDate: z
            .string()
            .refine((date) => !isNaN(Date.parse(date)), {
                message: "Data de nascimento inválida",
            }),

        cellphone: z.string().nonempty("Celular é obrigatório"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "As senhas não conferem",
    });

type RegisterFormData = z.infer<typeof registerUserFormSchema>;

export const useRegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        reset
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerUserFormSchema),
        mode: "onBlur",
        defaultValues: { 
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            confirmPassword: "",
            cpf: "",
            birthDate: "",
            cellphone: "",
        },
        criteriaMode: "all",
    });

    return {
        handleSubmit,
        register,
        errors,
        isSubmitting,
        setError,
        reset
    }
}
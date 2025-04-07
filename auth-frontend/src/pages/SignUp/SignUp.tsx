import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import api from "../../services/api";
import "./SignUp.scss";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email("Invalid email"),
  name: z.string().min(3, "Name must be at least 3 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-zA-Z]/, "Password must include at least one letter")
    .regex(/[0-9]/, "Password must include at least one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must include at least one special character"
    ),
});

type SignUpForm = z.infer<typeof schema>;

export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: SignUpForm) => {
    try {
      await api.post("/auth/signup", data);
      navigate("/signin");
    } catch (err) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input type="email" {...register("email")} />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <label>Name</label>
        <input type="text" {...register("name")} />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <label>Password</label>
        <input type="password" {...register("password")} />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit">Sign Up</button>
      </form>

      <p className="nav-link">
        Already have an account?{" "}
        <button onClick={() => navigate("/signin")}>Sign In</button>
      </p>
    </div>
  );
}

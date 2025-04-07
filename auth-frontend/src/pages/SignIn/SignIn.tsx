import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import "./SignIn.scss";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

type SignInForm = z.infer<typeof schema>;

export default function SignIn() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: SignInForm) => {
    try {
      const res = await api.post("/auth/signin", data);
      localStorage.setItem("token", res.data.access_token);
      navigate("/");
    } catch (err) {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input type="email" {...register("email")} />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <label>Password</label>
        <input type="password" {...register("password")} />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit">Sign In</button>
      </form>
      <p className="nav-link">
        Don't have an account?{" "}
        <button onClick={() => navigate("/signup")}>Sign Up</button>
      </p>
    </div>
  );
}

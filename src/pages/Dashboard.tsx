import { useContext, useEffect } from "react";
import Sidenav from "../components/Navigation/Sidenav";
import ProfileView from "../components/ProfileView/ProfileView";
import MiddleDashboard from "./employee/dashboard/MiddleDashboard";
import ApiServices from "../services/APIServices";
import TodoListResponse, { TaskListData } from "../types/ApiSchema";
import { EmployeeContext } from "../context/EmployeeContext";
import { toast } from "react-toastify";
import Menubar from "../components/menubar/Menubar";
// import Timesheet from "../components/Timesheet/Timesheet";
function Dashboard() {
  const { setTodoList, setToDoList, setTodoFetching } =
    useContext(EmployeeContext);
  useEffect(() => {
    ApiServices.getNewTodoList(1,(response: TodoListResponse) => {

      if (response.data.Todo ) {
        const todoList = response.data.Todo || [];
        setTodoList(todoList);
      } else {
        toast("Something went wrong while fetching todo list!");
      }
    });
  }, [setTodoList]);
  return (
    <div className="grid grid-cols-12 ">
      <div className="bg-purple-50 bg-gradient-to-tr from-blue-50 via-purple-50 to-pink-100 col-span-12 md:col-span-9">
        <div className="grid grid-cols-12">
          <div className="bg-white  col-span-12 md:col-span-1">
            <div className="hidden md:block">
              <Sidenav />
            </div>
            <div className="md:hidden">
              <Menubar />
            </div>
          </div>
          <div className="col-span-12 md:col-span-11 ">
            <MiddleDashboard />
            {/* <Timesheet /> */}
          </div>
        </div>
      </div>

      <div
        className={`col-span-12 md:col-span-3 max-[769px]:hidden
        }`}
      >
        <ProfileView />
      </div>
    </div>
  );
}

export default Dashboard;

// import { useState } from "react";

// import { useForm, Controller } from "react-hook-form";
// import {
//   Button,
//   Checkbox,
//   Typography,
//   FormControl,
//   InputLabel,
//   FormHelperText,
//   OutlinedInput,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import IconButton from "@mui/material/IconButton";
// import { toast } from "react-toastify";
// import { signInApiInterface } from "../../types/ApiSchema";
// import InputAdornment from "@mui/material/InputAdornment";
// import "react-toastify/dist/ReactToastify.css";
// import ApiServices from "../../services/APIServices";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import AccountCircle from "@mui/icons-material/AccountCircle";

// export interface loginFormFieldTypes {
//   username: string;
//   password: string;
//   rememberMe: boolean;
// }

// const Login = () => {
//   const navigate = useNavigate();

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<loginFormFieldTypes>();
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState<boolean>(false);

//   const handleTogglePassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
//     event.preventDefault();
//   };

//   const onSubmit = async (data: loginFormFieldTypes) => {
//     setLoading(true);

//     ApiServices.login(
//       data.username,
//       data.password,
//       data.rememberMe,
//       (response: signInApiInterface) => {
//         if (response.statusCode === 201) {
//           localStorage.setItem("user", JSON.stringify(response.data.user));
//           navigate("/dashboard");
//         } else {
//           toast.error(response.message);
//         }
//       }
//     );
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-cover"
//       style={{
//         backgroundImage: `url("https://images.jdmagicbox.com/comp/kolhapur/e3/0231px231.x231.230401022424.m9e3/catalogue/onpoint-software-services-deokar-panand-kolhapur-software-companies-hc5t322k8r.jpg?clr=")`,
//       }}
//     >
//       <div
//         className="absolute inset-0 bg-black opacity-30"
//         style={{ borderRadius: "1rem" }}
//       ></div>
//       <div className="w-full max-w-md bg-white px-16 py-10 rounded-3xl shadow-lg relative z-10">
//         {" "}
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <a className="mb-4 flex items-center justify-center" href="#!">
//               <img
//                 id="OPS-logo"
//                 className=" w-16 rounded-3xl"
//                  src="https://media.licdn.com/dms/image/C560BAQGDsrhIReQmUQ/company-logo_200_200/0/1635762645921/onpointsoft_services_logo?e=1709769600&v=beta&t=QQKNcR7JFOm1ulDkFHH9AOX6a4nDYHN5sVFNepf1h-4"
//                 alt="OPS Logo"
//                 draggable="false"
//               />
//             </a>
//           </div>
//           <h1 className="text-2xl font-montserrat font-semibold mb-4 text-center">
//             OnPoint
//           </h1>

//           <div className="mb-6">
//             <Controller
//               name="username"
//               control={control}
//               defaultValue=""
//               rules={{
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                   message: "Invalid Email address",
//                 },
//               }}
//               render={({ field }) => (
//                 <FormControl size="small" fullWidth variant="outlined">
//                   <InputLabel htmlFor="email">Email</InputLabel>
//                   <OutlinedInput
//                     {...field}
//                     id="email"
//                     endAdornment={
//                       <InputAdornment position="end">
//                         <AccountCircle sx={{mr: -0.5,ml:1}} />
//                       </InputAdornment>
//                     }
//                       label="Email"
//                     fullWidth
//                     style={{ borderRadius: 12 }}
//                     error={!!errors.username}
//                   />
//                   {errors.username && (
//                     <FormHelperText error>
//                       {errors.username.message}
//                     </FormHelperText>
//                   )}
//                 </FormControl>
//               )}
//             />
//           </div>
//           <div className="mb-1">
//             <Controller
//               name="password"
//               control={control}
//               defaultValue=""
//               rules={{
//                 required: "Password is required",
//                 pattern: {
//                   value:
//                     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.{8,})/,
//                   message: "Invalid password",
//                 },
//               }}
//               render={({ field }) => (
//                 <FormControl size="small" fullWidth variant="outlined">
//                   <InputLabel htmlFor="standard-adornment-password">
//                     Password
//                   </InputLabel>
//                   <OutlinedInput
//                     {...field}
//                     id="standard-adornment-password"
//                     type={showPassword ? "text" : "password"}
//                     endAdornment={
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle password visibility"
//                           onClick={handleTogglePassword}
//                           onMouseDown={handleMouseDownPassword}
//                           edge="end"                          // sx={{ml: }}

//                         >
//                           {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     }
//                       label="Password"
//                     fullWidth
//                     style={{ borderRadius: 12 }}
//                     error={!!errors.password}
//                   />
//                   {errors.password && (
//                     <FormHelperText error>
//                       {errors.password.message}
//                     </FormHelperText>
//                   )}
//                 </FormControl>
//               )}
//             />
//           </div>

//           <div className="mb-3 flex items-center justify-between">
//             <Typography fontFamily="Montserrat" sx={{ fontSize: 13 }}>
//               <Controller
//                 name="rememberMe"
//                 control={control}
//                 defaultValue={false}
//                 render={({ field }) => <Checkbox {...field} color="primary" />}
//               />
//               Remember Me
//             </Typography>
//           </div>

//           <Button
//             disabled={loading ? true : false}
//             sx={{
//               "&:hover": {
//                 backgroundColor: "#3730a3 !important",
//               },
//             }}
//             size="small"
//             style={{ borderRadius: 20, backgroundColor: "#6F6CFF" }}
//             variant="contained"
//             type="submit"
//             fullWidth
//           >
//             <Typography fontFamily="Montserrat" fontWeight={400}>
//               {loading ? "Please wait ..." : "Login"}
//             </Typography>
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

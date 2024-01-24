
import { Link } from "react-router-dom";
import {useState} from "react";

export const links = [
  {
    to: "dashboard",
    title: "dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        stroke=""
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0"
        viewBox="0 0 24 24"
        fill="none"
        className="h-8"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 6C2 3.79086 3.79086 2 6 2H7C9.20914 2 11 3.79086 11 6V7C11 9.20914 9.20914 11 7 11H6C3.79086 11 2 9.20914 2 7V6ZM6 4C4.89543 4 4 4.89543 4 6V7C4 8.10457 4.89543 9 6 9H7C8.10457 9 9 8.10457 9 7V6C9 4.89543 8.10457 4 7 4H6ZM13 6C13 3.79086 14.7909 2 17 2H18C20.2091 2 22 3.79086 22 6V7C22 9.20914 20.2091 11 18 11H17C14.7909 11 13 9.20914 13 7V6ZM17 4C15.8954 4 15 4.89543 15 6V7C15 8.10457 15.8954 9 17 9H18C19.1046 9 20 8.10457 20 7V6C20 4.89543 19.1046 4 18 4H17ZM2 17C2 14.7909 3.79086 13 6 13H7C9.20914 13 11 14.7909 11 17V18C11 20.2091 9.20914 22 7 22H6C3.79086 22 2 20.2091 2 18V17ZM6 15C4.89543 15 4 15.8954 4 17V18C4 19.1046 4.89543 20 6 20H7C8.10457 20 9 19.1046 9 18V17C9 15.8954 8.10457 15 7 15H6ZM13 17C13 14.7909 14.7909 13 17 13H18C20.2091 13 22 14.7909 22 17V18C22 20.2091 20.2091 22 18 22H17C14.7909 22 13 20.2091 13 18V17ZM17 15C15.8954 15 15 15.8954 15 17V18C15 19.1046 15.8954 20 17 20H18C19.1046 20 20 19.1046 20 18V17C20 15.8954 19.1046 15 18 15H17Z"
          fill="#8E8E8E"
        />
      </svg>
    ),
  },
  {
    to: "timesheet",
    title: "timesheet",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="h-8"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 17C8 16.4477 8.44772 16 9 16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H9C8.44772 18 8 17.5523 8 17Z"
          fill="#8E8E8E"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 13C8 12.4477 8.44772 12 9 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H9C8.44772 14 8 13.5523 8 13Z"
          fill="#8E8E8E"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 9C8 8.44772 8.44772 8 9 8H10C10.5523 8 11 8.44772 11 9C11 9.55228 10.5523 10 10 10H9C8.44772 10 8 9.55228 8 9Z"
          fill="#8E8E8E"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 4C6.89543 4 6 4.89543 6 6V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V8.82843C18 8.56321 17.8946 8.30886 17.7071 8.12132L13.8787 4.29289C13.6911 4.10536 13.4368 4 13.1716 4H8ZM4 6C4 3.79086 5.79086 2 8 2H13.1716C13.9672 2 14.7303 2.31607 15.2929 2.87868L19.1213 6.70711C19.6839 7.26972 20 8.03278 20 8.82843V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V6Z"
          fill="#8E8E8E"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 3V5C14 6.65685 15.3431 8 17 8H19V10H17C14.2386 10 12 7.76142 12 5V3H14Z"
          fill="#8E8E8E"
        />
      </svg>
    ),
  },
  {
    to: "settings",
    title: "settings",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="h-8"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd" 
          d="M12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z"
          fill="#8E8E8E"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.73092 4.54104C8.73092 3.13766 9.86858 2 11.272 2H12.7306C14.134 2 15.2717 3.13766 15.2717 4.54104C15.2717 4.74442 15.4119 5.01577 15.7471 5.19782C15.8503 5.25384 15.952 5.31209 16.0522 5.37252C16.3866 5.57406 16.7004 5.56113 16.8847 5.45569C18.1085 4.75547 19.668 5.17332 20.3777 6.39162L21.0821 7.60076C21.7932 8.8214 21.3736 10.3877 20.1474 11.0892C19.9697 11.1909 19.8025 11.4496 19.8107 11.8346C19.8118 11.8896 19.8124 11.9448 19.8124 12C19.8124 12.0552 19.8118 12.1104 19.8107 12.1654C19.8025 12.5504 19.9697 12.8091 20.1474 12.9108C21.3736 13.6123 21.7932 15.1786 21.0821 16.3992L20.3777 17.6084C19.6679 18.8267 18.1084 19.2445 16.8846 18.5443C16.7004 18.4389 16.3865 18.4259 16.0522 18.6275C15.952 18.6879 15.8503 18.7462 15.7471 18.8022C15.4119 18.9842 15.2717 19.2556 15.2717 19.459C15.2717 20.8623 14.134 22 12.7306 22H11.272C9.86858 22 8.73092 20.8623 8.73092 19.459C8.73092 19.2556 8.59067 18.9842 8.25546 18.8022C8.15231 18.7462 8.05058 18.6879 7.95034 18.6275C7.61603 18.4259 7.30221 18.4389 7.11795 18.5443C5.89416 19.2445 4.33467 18.8267 3.62492 17.6084L2.92048 16.3992C2.20937 15.1786 2.62903 13.6123 3.85517 12.9108C4.03293 12.8091 4.20008 12.5504 4.19193 12.1654C4.19077 12.1104 4.19018 12.0553 4.19018 12C4.19018 11.9448 4.19077 11.8896 4.19193 11.8346C4.20007 11.4497 4.03292 11.191 3.85515 11.0892C2.629 10.3877 2.20934 8.82141 2.92045 7.60077L3.62487 6.39163C4.33462 5.17333 5.89412 4.75548 7.11792 5.4557C7.30218 5.56113 7.61602 5.57407 7.95034 5.37253C8.05058 5.3121 8.15231 5.25384 8.25546 5.19782C8.59067 5.01577 8.73092 4.74442 8.73092 4.54104ZM11.272 4C10.9732 4 10.7309 4.24223 10.7309 4.54104C10.7309 5.64708 10.0254 6.51246 9.20998 6.95535C9.13322 6.99703 9.05751 7.04039 8.98289 7.08537C8.18743 7.5649 7.08542 7.74134 6.12467 7.19163C5.85431 7.03694 5.50979 7.12925 5.353 7.39839L4.64858 8.60754C4.49656 8.86848 4.58627 9.20332 4.8484 9.3533C5.81071 9.90391 6.21112 10.9487 6.19148 11.8769C6.19062 11.9178 6.19018 11.9589 6.19018 12C6.19018 12.0412 6.19062 12.0822 6.19148 12.1231C6.21112 13.0513 5.81072 14.0961 4.84842 14.6467C4.5863 14.7967 4.49659 15.1315 4.64861 15.3924L5.35305 16.6016C5.50984 16.8708 5.85435 16.9631 6.1247 16.8084C7.08544 16.2587 8.18744 16.4351 8.9829 16.9146C9.05751 16.9596 9.13322 17.003 9.20998 17.0447C10.0254 17.4875 10.7309 18.3529 10.7309 19.459C10.7309 19.7578 10.9732 20 11.272 20H12.7306C13.0294 20 13.2717 19.7578 13.2717 19.459C13.2717 18.3529 13.9771 17.4875 14.7926 17.0447C14.8694 17.003 14.9451 16.9596 15.0197 16.9146C15.8151 16.4351 16.9171 16.2587 17.8779 16.8084C18.1482 16.9631 18.4927 16.8708 18.6495 16.6016L19.354 15.3924C19.506 15.1315 19.4163 14.7967 19.1542 14.6467C18.1919 14.0961 17.7915 13.0513 17.8111 12.1231C17.812 12.0822 17.8124 12.0412 17.8124 12C17.8124 11.9589 17.812 11.9178 17.8111 11.8769C17.7915 10.9487 18.1919 9.9039 19.1542 9.35329C19.4163 9.20331 19.506 8.86848 19.354 8.60753L18.6496 7.39839C18.4928 7.12924 18.1483 7.03693 17.8779 7.19162C16.9172 7.74134 15.8152 7.5649 15.0197 7.08536C14.9451 7.04039 14.8694 6.99703 14.7926 6.95535C13.9771 6.51246 13.2717 5.64708 13.2717 4.54104C13.2717 4.24223 13.0294 4 12.7306 4H11.272Z"
          fill="#8E8E8E"
        />
      </svg>
    ),
  },
  {
    to: "login",
    title: "logout",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="h-8 "
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L17.7071 7.29289C17.3166 6.90237 16.6834 6.90237 16.2929 7.29289C15.9024 7.68342 15.9024 8.31658 16.2929 8.70711L19.5858 12L16.2929 15.2929C15.9024 15.6834 15.9024 16.3166 16.2929 16.7071C16.6834 17.0976 17.3166 17.0976 17.7071 16.7071L21.7071 12.7071Z"
          fill="#8E8E8E"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22 12C22 11.4477 21.5523 11 21 11L9 11C8.44771 11 8 11.4477 8 12C8 12.5523 8.44771 13 9 13L21 13C21.5523 13 22 12.5523 22 12Z"
          fill="#8E8E8E"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 19C12 18.4477 11.5523 18 11 18L6 18C4.89543 18 4 17.1046 4 16L4 8C4 6.89543 4.89543 6 6 6L11 6C11.5523 6 12 5.55229 12 5C12 4.44771 11.5523 4 11 4L6 4C3.79086 4 2 5.79086 2 8L2 16C2 18.2091 3.79086 20 6 20L11 20C11.5523 20 12 19.5523 12 19Z"
          fill="#8E8E8E"
        />
      </svg>
    ),
  },
]


export default function Sidenav() {
  const [activeTab,setActiveTab]=useState<string>('dashnoard') 

 

  return (
    <nav className="max-h-screen  ">
      <div className="border-b">
        <Link to="/dashboard">
          <button
            className="flex items-center justify-center  p-6 outline-none"
            
          >
            <img
              id="OPS-logo"
              className="w-12 rounded-full  dark:shadow-black/30"
              src="https://media.licdn.com/dms/image/C560BAQGDsrhIReQmUQ/company-logo_200_200/0/1635762645921/onpointsoft_services_logo?e=1709769600&v=beta&t=QQKNcR7JFOm1ulDkFHH9AOX6a4nDYHN5sVFNepf1h-4"
              alt="OPS Logo"
              draggable="false"
            />
          </button>
        </Link>
      </div>

      <div className="">
        <ul className="relative">
          {links.map((link, index) => (
            
              <Link to={link.to} className={`${activeTab===link.title ?'bg-red-600':'bg-green-300'}`}>
             <button onClick={()=>setActiveTab(link.title)} key={index}>
  {link?.title}
             </button>
              </Link>
            
           
           
          ))} 
         
        
        </ul>
      </div>
    </nav>
  );
}
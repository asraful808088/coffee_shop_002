interface ToastProps {
  children: any;
  className:string
  activetoast:boolean
  center:boolean
  
}
export default function Toast(props: ToastProps) {
  return <div className={`${props.className} ${props.activetoast?"":"hidden"} ${props.center?"flex items-center justify-center":""} z-[9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999] fixed top-0 left-0 h-screen w-screen`}>{props.children}</div>;
}

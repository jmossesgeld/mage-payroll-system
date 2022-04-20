import { Button } from "./Button";

export default function Welcome() {
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <h1 className="pt-12 text-center text-6xl font-bold font-sans  text-slate-700">
        Payroll in Simplest Form
      </h1>
      <h1 className="pt-12 text-center text-2xl md:text-3xl font-sans text-sky-900">
        Timekeeping to Pay Slip
        <span className="font-bold mx-2 rounded-lg px-3 block py-1 my-1">Real Quick</span>
        and Hassle-Free
      </h1>
      <div className="flex justify-evenly w-full max-w-md pt-12 font-sans">
        <Button round color="primary" className="shadow-md shadow-sky-300">
          Get Started
        </Button>
        <Button round color="secondary" className="shadow-md shadow-sky-300">
          Try Demo
        </Button>
      </div>
      <div className="flex flex-col text-sky-900 items-stretch text-center gap-4 text-xl mt-12 font-sans opacity-50">
        <p>Simple and Lightweight</p>
        <p>Almost Zero Learning Curve</p>
      </div>
    </div>
  );
}

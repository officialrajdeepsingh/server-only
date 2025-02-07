"use client";

import { getServerUser } from "@/utils/server-utils";
import Link from "next/link";
import { use } from "react";

export default function Home() {
  const { server_user } = use(getServerUser());

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-row justify-around container">
        <Link className="bg-white p-2 text-black rounded-md" href={"/"}>
          {" "}
          Server componet
        </Link>
        <Link className="bg-white p-2 text-black rounded-md" href={"/client"}>
          {" "}
          Client componet
        </Link>
        <Link
          className="bg-white p-2 text-black rounded-md"
          href={"/protected-client"}
        >
          {" "}
          Protected Client componet with Server Only{" "}
        </Link>
      </div>

      <div>
        <h1> Client component</h1>
      </div>
      <div className="container flex  flex-col md:flex-row items-center justify-center">
        <div className="mt-36 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h1 className="text-center mt-2"> Server utils</h1>
          <div className="flex flex-col items-center py-5 pb-10">
            <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">
              {" "}
              {server_user.firstName} {server_user.lastName}{" "}
            </h5>
            <span className="text-lg bg-black text-white px-3 py-1 rounded-lg   ">
              {server_user.company.department}
            </span>
            <div className="mt-4 inline-flex text-md text-gray-900 dark:text-white items-center">
              {" "}
              <GenderIcon /> {server_user.gender}{" "}
            </div>
            <div className="mt-4 inline-flex text-md text-gray-900 dark:text-white items-center">
              {" "}
              <AddressIcon /> {server_user.address.address}{" "}
              {server_user.address.country}{" "}
            </div>
            <div className="my-4 inline-flex text-md text-gray-900 dark:text-white items-center">
              {" "}
              <EmailIcon /> {server_user.email}{" "}
            </div>
            <div className="inline-flex text-md text-gray-900 dark:text-white items-center">
              {" "}
              <AddressIcon /> {server_user.address.address}{" "}
              {server_user.address.country}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AddressIcon() {
  return (
    <svg
      className="h-5 w-5 text-gray-900 dark:text-white  mr-2"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      {" "}
      <path d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />{" "}
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5  text-gray-900 dark:text-white mr-2"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671L18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
      />
    </svg>
  );
}

function GenderIcon() {
  return (
    <svg
      height="24"
      width="24"
      className="text-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      {" "}
      <path
        fill="currentColor"
        d="M267.817,171.048c-12.343-12.388-27.371-22.176-44.078-28.53c-7.888,8.766-13.259,19.438-15.502,31.01 c-0.61,3.12-0.976,6.248-1.144,9.361c1.373,0.472,2.716,0.976,4.029,1.548c14.555,6.171,27.051,16.501,35.808,29.515 c7.033,10.405,11.702,22.451,13.274,35.504c0.412,3.257,0.61,6.576,0.61,9.963c0,11.306-2.273,21.956-6.377,31.674 c-5.096,11.985-12.984,22.588-22.886,30.835c-2.105,1.777-4.318,3.426-6.606,4.974c-13.014,8.788-28.546,13.884-45.497,13.884 c-11.275,0-21.909-2.281-31.643-6.378c-14.586-6.171-27.036-16.508-35.824-29.515c-8.758-12.992-13.854-28.561-13.854-45.474 c0-11.298,2.243-21.932,6.362-31.674c5.539-13.075,14.464-24.487,25.678-33.008c-0.214-2.953-0.306-5.905-0.306-8.857 c0-15.165,2.38-29.965,6.912-43.956c-17.348,6.309-32.91,16.34-45.665,29.126c-22.611,22.543-36.648,53.919-36.602,88.37 c-0.045,34.459,13.992,65.835,36.602,88.385c18.827,18.857,43.788,31.696,71.556,35.426v38.952h-57.901v33.55h57.901V512h33.566 v-56.268h57.947v-33.55H196.23v-38.952c27.784-3.73,52.775-16.569,71.587-35.426c6.286-6.286,11.886-13.228,16.752-20.742 c12.587-19.491,19.896-42.781,19.865-67.643c0-5.835-0.412-11.61-1.175-17.24C299.43,214.562,286.583,189.769,267.817,171.048z"
      />
      <path
        fill="currentColor"
        d="M349.015,0v33.551h51.203l-52.912,52.912c-22.276-16.981-49.052-25.564-75.691-25.54 c-31.903-0.024-64.019,12.22-88.37,36.617c-17.424,17.378-28.622,38.714-33.627,61.12c-0.061,0.274-0.091,0.549-0.168,0.778 c-0.198,0.87-0.366,1.747-0.533,2.579c-0.306,1.617-0.58,3.227-0.839,4.836c-0.168,0.969-0.305,1.984-0.412,2.952 c-0.198,1.473-0.366,2.983-0.488,4.493c-0.076,0.87-0.168,1.748-0.213,2.617c-0.03,0.435-0.061,0.877-0.091,1.343 c-0.077,0.877-0.107,1.777-0.138,2.646c-0.061,1.648-0.107,3.326-0.107,4.974c0,1.274,0.046,2.548,0.077,3.852 c0.061,1.282,0.138,2.548,0.198,3.861l0.198,2.822c0,0.466,0.076,0.938,0.106,1.442c2.686,27.874,14.723,55.124,36.037,76.4 c12.908,12.916,28.012,22.436,44.078,28.516c4.866-5.363,8.834-11.572,11.687-18.255c2.944-7.01,4.623-14.426,4.958-22.077 c-10.908-3.921-21.1-10.23-29.888-19.018c-7.949-7.987-13.899-17.118-17.851-26.914c-2.822-6.92-4.638-14.166-5.432-21.475 c-0.518-4.326-0.64-8.689-0.442-13.014c0.061-1.076,0.137-2.113,0.198-3.158c0.076-0.77,0.137-1.541,0.274-2.319 c0-0.298,0.061-0.595,0.092-0.9c0.076-0.74,0.168-1.51,0.305-2.243c0.168-1.007,0.336-2.052,0.534-3.051 c0.884-4.57,2.151-9.063,3.829-13.427c0.306-0.801,0.61-1.571,0.977-2.38c0.336-0.839,0.701-1.678,1.098-2.517 c0.336-0.839,0.733-1.679,1.175-2.487c0.366-0.831,0.808-1.64,1.282-2.441c2.212-4.104,4.822-8.055,7.812-11.817 c0.61-0.77,1.251-1.54,1.877-2.281c1.388-1.579,2.792-3.12,4.302-4.63c1.876-1.877,3.784-3.624,5.767-5.234 c6.5-5.401,13.624-9.635,21.1-12.648c14.662-5.942,30.804-7.453,46.199-4.463c15.41,2.99,29.995,10.36,41.988,22.344 c7.98,7.987,13.884,17.118,17.836,26.906c5.981,14.662,7.492,30.773,4.501,46.176c-3.021,15.394-10.406,29.988-22.337,41.973 c-2.624,2.616-5.37,5.035-8.223,7.178c0.167,2.952,0.259,5.905,0.259,8.818c0.046,15.036-2.35,29.858-6.942,43.956 c16.707-6.042,32.375-15.769,45.726-29.119c24.366-24.327,36.648-56.443,36.617-88.377c0.03-26.647-8.559-53.377-25.571-75.691 l52.912-52.912v51.226h33.55V0H349.015z"
      />
    </svg>
  );
}

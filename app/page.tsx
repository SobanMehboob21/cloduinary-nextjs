// import './globals.css'

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-center p-10 bg-slate-900 min-h-80">
        <h3 className="text-2xl font-serif font-medium text-slate-200">
          Upload title content and image
        </h3>

        <p className="text-slate-200">Go to</p>
        <div className="mt-3">
          <Link
            className="text-slate-200 text-xl hover:bg-sky-900 p-2 rounded-xl"
            href="/upload"
          >
            Upload
          </Link>
        </div>
      </div>
    </>
  );
}

// dbuser
// clodinary123
// mongodb+srv://dbuser:clodinary123@cluster0.odibl9a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

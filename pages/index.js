import Head from 'next/head';

export default function Home() {
  return (
    <>
      <div className="mt-20 mx-auto text-black w-1/2">
        <h1 className="text-5xl font-bold">Hello world</h1>
        <h2 className="text-3xl mt-4">
          A Next.js and Tailwind CSS starter from
          {' '}
          <a className="underline hover:text-blue-600" href="http://tommyp.org">Tommy Palmer</a>
          .
        </h2>
      </div>
    </>
  );
}

import { Link, useNavigate } from "react-router-dom"

const Page404 = () => {
  const navigate = useNavigate()

  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-60 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => navigate(-1)}
              className="rounded-md bg-gray-dark px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-dark-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span aria-hidden="true">&larr;</span> Go back
            </button>
            <Link href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default Page404
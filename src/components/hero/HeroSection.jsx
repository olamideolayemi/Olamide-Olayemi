import PropTypes from 'prop-types'

const HeroSection = ({ title, content }) => {
  return (
    <div className=" bg-white dark:bg-dark-blue relative px-6 pt-0 h-auto lg:px-8">
      <div
        aria-hidden="true"
        className="absolute bg-white dark:bg-gray-dark inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        {/* <div
          // style={{
          //   clipPath:
          //     'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          // }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:from-[#4f46e5] dark:to-[#6b7280] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        /> */}
      </div>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-left">
          <p className="text-balance text-1xl font-semibold tracking-tight text-black dark:text-gray_text sm:text-1xl">
            {title}
          </p>
          <p className="mt-8 text-pretty text-md font-medium text-black dark:text-gray_text sm:text-1xl">
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}

HeroSection.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}

export default HeroSection
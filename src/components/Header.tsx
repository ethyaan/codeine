export default function Header() {
  return (
    <header className="bg-[url('https://source.unsplash.com/random/?code,software,developer,javascript,programmer')] w-full h-[29rem] xl:h-[33rem] bg-no-repeat bg-cover bg-[50%] bg-blend-darken relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <div className="absolute top-20 left-2/4 px-4 mx-auto w-full max-w-screen-xl -translate-x-2/4 xl:top-2/4 xl:-translate-y-2/4 xl:px-0">
        <span className="block mb-2 text-gray-300">
          Published in{" "}
          <a href="#" className="font-semibold text-white underline">
            World News
          </a>
        </span>
        <h1 className="mb-2 max-w-4xl text-2xl font-extrabold leading-4 text-white sm:text-3xl lg:text-4xl">
          Flowbite Blocks Tutorial - Learn how to get started with custom
          sections using the Flowbite Blocks
        </h1>
        <p className="text-xl font-normal text-gray-300">
          Before going digital, you might scribbling down some ideas in a
          sketchbook.
        </p>
      </div>
    </header>
  );
}

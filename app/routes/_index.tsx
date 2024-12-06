export default function Home() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Profile</title>
      </head>
      <body className="text-center p-4">
        <h1 className="text-4xl text-pink-500 font-serif animate-bounce font-semibold">Hi, I am Shreya Pahuja!</h1>
        <img src="favicon.ico" className="mx-auto mt-4 w-32 h-32"></img>
        <p>
          <h2 className="m-10">About Me</h2>
          <p>I am a third year undergraduate student pursuing Computer Science at Punjab Engingeering College. I am passionate about Web Devlopment. My ineterests are books and music!</p>
        </p>
      </body>
    </html>
  );
}

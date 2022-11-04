import { render } from "@testing-library/react";
import { useRef } from "react";

function LandingPage({ handleSignIn, addNewUser, friends }) {

  const imageRef = useRef(null)

  function handleSignUp(e, imageSrc) {
    const firstName = e.target["first-name"].value
    const lastName = e.target["last-name"].value
    const username = e.target["username"].value
    const bio = e.target["bio"].value
    const password = e.target["password"].value
    // const image = e.target["image"].value
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: friends.length + 1,
        first_name: firstName,
        last_name: lastName,
        username: username,
        bio: bio,
        password: password,
        image: imageSrc
      }),
    })
      .then(res => res.json())
      .then(newUser => addNewUser(newUser))
  }

  function handleSubmit(e) {
    e.preventDefault()
    let reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        handleSignUp(reader.result)
      }
    }
    reader.readAsDataURL(imageRef.current.files[0])
  }

  return (
    <div>
      <div>
        <form className="signin-form" onSubmit={handleSignIn}>
          <h1>Sign In</h1>
          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
      </div>
      <div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <input type="text" name="first-name" placeholder="First Name" />
          <input type="text" name="last-name" placeholder="Last Name" />
          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="bio" placeholder="Bio" />
          <input type="text" name="password" placeholder="Password" />
          <input type="file" name="image" accept="image/png, image/gif, image/jpeg" ref={imageRef} />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default LandingPage;
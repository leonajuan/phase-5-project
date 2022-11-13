import { render } from "@testing-library/react";
import { useRef } from "react";

function LandingPage({ handleSignIn, addNewUser, friends }) {

  const imageRef = useRef(null)

  function handleSignUp(e, imageSrc) {

    console.log(e.target)

    const firstName = e.target["first_name"].value
    const lastName = e.target["last_name"].value
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
        handleSignUp(e, reader.result)
      }
    }
    reader.readAsDataURL(imageRef.current.files[0])
  }

  return (
    <div className="landing-page-div">
      <div>
        <form className="signin-form" onSubmit={handleSignIn}>
          <h1 className="signin-header">Welcome back!</h1>
          <h4 className="signin-subtext">Please sign in below.</h4>
          <label className="signin-username">Username</label>
          <input className="username" type="text" name="username" placeholder="Username" />
          <label className="signin-password">Password</label>
          <input className="password" type="password" name="password" placeholder="Password" />
          <button className="signin-button">Sign In</button>
        </form>
      </div>
      <div className="signup-form-div">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h1 className="signup-header">Join Us</h1>
          <h4 className="signup-subtext">Sign up below.</h4>
          <label className="first-name">First Name</label>
          <input className="signup-firstname" type="text" name="first_name" placeholder="First Name" />
          <label className="last-name">Last Name</label>
          <input className="signup-lastname" type="text" name="last_name" placeholder="Last Name" />
          <label className="signup-username-label">Username</label>
          <input className="signup-username" type="text" name="username" placeholder="Username" />
          <label className="bio">Bio</label>
          <input className="signup-bio" type="text" name="bio" placeholder="Bio" />
          <label className="signup-password-label">Password</label>
          <input className="signup-password" type="text" name="password" placeholder="Password" />
          <label className="signup-image-label">Image</label>
          <input className="signup-image" type="file" name="image" accept="image/png, image/gif, image/jpeg" ref={imageRef} />
          <button className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default LandingPage;
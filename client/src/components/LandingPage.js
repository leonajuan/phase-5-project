function LandingPage({ handleSignIn, handleSignUp }) {
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
        <form className="signup-form" onSubmit={handleSignUp}>
          <h1>Sign Up</h1>
          <input type="text" name="first-name" placeholder="First Name" />
          <input type="text" name="last-name" placeholder="Last Name" />
          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="bio" placeholder="Bio" />
          <input type="text" name="password" placeholder="Password" />
          <input type="text" name="image" placeholder="Image URL" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default LandingPage;
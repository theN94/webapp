// const container = document.getElementById('container');
// const registerBtn = document.getElementById('register');
// const loginBtn = document.getElementById('login');

// registerBtn.addEventListener('click', () => {
//     container.classList.add("active");
// });

// loginBtn.addEventListener('click', () => {
//     container.classList.remove("active");
// });



//     <div class="container" id="container">
//         <div class="form-container sign-up">
//             <form>
//                 <h1>Create Account</h1>
//                 <div class="social-icons">
//                     <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
//                     <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
//                     <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
//                     <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
//                 </div>
//                 <span>or use your email for registeration</span>
//                 <input type="text" placeholder="Name">
//                 <input type="email" placeholder="Email">
//                 <input type="password" placeholder="Password">
//                 <button>Sign Up</button>
//             </form>
//         </div>
//         <div class="form-container sign-in">
//             <form>
//                 <h1>Sign In</h1>
//                 <div class="social-icons">
//                     <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
//                     <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
//                     <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
//                     <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
//                 </div>
//                 <span>or use your email password</span>
//                 <input type="email" placeholder="Email">
//                 <input type="password" placeholder="Password">
//                 <a href="#">Forget Your Password?</a>
//                 <button>Sign In</button>
//             </form>
//         </div>
//         <div class="toggle-container">
//             <div class="toggle">
//                 <div class="toggle-panel toggle-left">
//                     <h1>Welcome Back !</h1>
//                     <p>Enter your personal details to use all of site features</p>
//                     <button class="hidden" id="login">Sign In</button>
//                 </div>
//                 <div class="toggle-panel toggle-right">
//                     <h1>Welcome, Friend!</h1>
//                     <p>Enter your personal details to use all of site features</p>
//                     <button class="hidden" id="register">Sign Up</button>
//                 </div>
//             </div>
//         </div>
//     </div>

//     <script src="script.js"></script>

{/* <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-100 text-center">
        <h1 className="mb-5">DocuFind</h1>

        <div className="card bg-transparent mx-auto" style={{ maxWidth: '400px' }}>
          <div className="card-body shadow-lg">
            {isSignUp ? (
              <>
                <h2 className="mb-4">Sign Up</h2>
                <form onSubmit={handleSignUpSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="username" className="text-white">Enter your name</label>
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      id="username"
                      name="username"
                      value={signUpData.username}
                      onChange={handleSignUpChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="phoneNumber" className="text-white">Enter Phone Number</label>
                    <input
                      type="tel"
                      className="form-control rounded-pill"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={signUpData.phoneNumber}
                      onChange={handleSignUpChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="email" className="text-white">Enter your Email</label>
                    <input
                      type="email"
                      className="form-control rounded-pill"
                      id="email"
                      name="email"
                      value={signUpData.email}
                      onChange={handleSignUpChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password" className="text-white">Enter your Password</label>
                    <input
                      type="password"
                      className="form-control rounded-pill"
                      id="password"
                      name="password"
                      value={signUpData.password}
                      onChange={handleSignUpChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="confirmPassword" className="text-white">Enter Confirm Password</label>
                    <input
                      type="password"
                      className="form-control rounded-pill"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={signUpData.confirmPassword}
                      onChange={handleSignUpChange}
                      required
                    />
                  </div>
                  <div className="d-flex flex-row justify-content-center">
                    <div className="form-group m-3">
                      <input
                        type="radio"
                        id="user"
                        name="userType"
                        checked={usr}
                        onChange={handleUserTypeChange}
                      />
                      <label htmlFor="user" className="text-white">User</label>
                    </div>
                    <div className="form-group m-3">
                      <input
                        type="radio"
                        id="org"
                        name="userType"
                        checked={org}
                        onChange={handleUserTypeChange}
                      />
                      <label htmlFor="org" className="text-white">Organization</label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Sign Up
                  </button>
                </form>
                <p className="mt-3">
                  Already have an account?{' '}
                  <button
                    type="button"
                    className="btn btn-link p-0"
                    onClick={() => setIsSignUp(false)}
                  >
                    Login
                  </button>
                </p>
              </>
            ) : (
              <>
                <h2 className="mb-4">Login</h2>
                <form onSubmit={handleLoginSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="usernameOrEmail" className="text-white">Enter your Email</label>
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      id="usernameOrEmail"
                      name="usernameOrEmail"
                      value={loginCredentials.usernameOrEmail}
                      onChange={handleLoginChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password" className="text-white">Enter your Password</label>
                    <input
                      type="password"
                      className="form-control rounded-pill"
                      id="password"
                      name="password"
                      value={loginCredentials.password}
                      onChange={handleLoginChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
                </form>
                <p className="mt-3">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    className="btn btn-link p-0"
                    onClick={() => setIsSignUp(true)}
                  >
                    Sign Up
                  </button>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div> */}
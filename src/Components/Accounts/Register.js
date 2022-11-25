const Register = () => {
    return (
        <>
            <div className="container">
                <h3 class="display-6">Registration</h3>
                <form class="row g-3 bg-light p-4 mt-4">
                    <div class="col-md-12">
                        <label for="inputName" class="form-label">Name</label>
                        <input type="text" class="form-control" id="inputName" placeholder="Name" />
                    </div>
                    <div class="col-6">
                        <label for="inputEmail" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail" placeholder="Email Address" />
                    </div>
                    <div class="col-6">
                        <label for="inputDob" class="form-label">Date of birth</label>
                        <input type="text" class="form-control" id="inputDob" placeholder="Date of Birth" />
                    </div>
                    <div class="col-6">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password" />
                    </div>
                    <div class="col-6">
                        <label for="cpassword" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="cpassword" placeholder="Confirm Password" />
                    </div>

                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </>
    )

}

export default Register;
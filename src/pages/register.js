import Layout from "../components/Layout"

const Register = () => (
	<Layout>
		<div className="mx-auto mt-3 w-50">
			<span className="text-center dark-green-text">
				<h2 className="text-uppercase page-title">Register</h2>
				<p>Sign up to edit blog posts, the menu, and more.</p>
			</span>
			<form className="border custom-border px-3 pt-3">
				<div className="form-group">
					<label for="email-input">Email</label>
					<input type="email" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Email" />
				</div>
				<div className="form-group">
					<label for="confirm-email-input">Confirm Email</label>
					<input type="email" className="form-control" id="confirm-email-input" placeholder="Confirm Email" />
				</div>
				<div className="form-group">
					<label for="password-input">Password</label>
					<input type="password" className="form-control" id="password-input" placeholder="Password" />
				</div>
				<div className="form-group">
					<label for="confirm-password-input">Confirm Password</label>
					<input type="password" className="form-control" id="confirm-password-input" placeholder="Confirm Password" />
				</div>
				<div className="form-group">
					<button type="submit" className="btn btn-green w-100 mt-2 mb-1">Register</button>
				</div>
			</form>
		</div>
		<style jsx>{`
			.custom-border {
				border-radius: 10px;
			}

			.page-title {
				font-family: 'Oswald', sans-serif;
				font-size: 60px;
			}

			.dark-green-text {
				color: #094c3a;
			}

			.form-group {
				margin-bottom: 0.5rem;
			}

			label {
				margin-bottom: 0.25rem;
			}

			.btn-green {
				background-color: #42a86e;
				border: 1px solid #3f855d;
				color: white;
			}

			.btn-green:hover {
				background-color: #3f855d;
			}
		`}</style>
	</Layout>
)

export default Register
import { useState ,useEffect} from "react";
import axios from "axios";

import styles from "./styles.module.css";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		roll: "",
		email: "",
		mobileNo: "",
		github: "",
		tech: "",
		linkedin: "",
	});
	const [error, setError] = useState("");
	const [success,setSuccess] =useState("");
	

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	useEffect(() => {
		if (error !== "" ) {
		  // Set a timeout to clear the error after 5 seconds
		  const timeoutId = setTimeout(() => {
			setError("");
			
		  }, 5000);
		  return () => {
			clearTimeout(timeoutId);
		  };
		}
	  }, [error]);

	  useEffect(() => {
		if (success !== "") {
		  // Set a timeout to clear the error after 5 seconds
		  const timeoutId = setTimeout(() => {
			
			setSuccess("");
		  }, 5000);
		  return () => {
			clearTimeout(timeoutId);
		  };
		}
	  }, [success]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://csshackathonbackend.onrender.com/api/users";
			const { data: res } = await axios.post(url, data);
			setSuccess(res.message);
			
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		
			<div className={styles.signup_form_container}>

				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Register !</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
                        <input
							type="text"
							placeholder="Roll number"
							name="roll"
							onChange={handleChange}
							value={data.roll}
							required
							className={styles.input}
						/>

						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="number"
							placeholder="Mobile number"
							name="mobileNo"
							onChange={handleChange}
							value={data.mobileNo}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Github Id"
							name="github"
							onChange={handleChange}
							value={data.github}
							required
							className={styles.input}
						/>
                        <input
							type="text"
							placeholder="Technical Preference"
							name="tech"
							onChange={handleChange}
							value={data.tech}
							required
							className={styles.input}
						/>
                        <input
							type="text"
							placeholder="Linkedin"
							name="linkedin"
							onChange={handleChange}
							value={data.linkedin}
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						{success && <div className={styles.succ_msg}>Congo! You are registerd.</div> }
					
						<button type="submit" className={styles.green_btn}>
							Register 
						</button>
					</form>
				</div>
			</div>
		
	);
};

export default Signup;
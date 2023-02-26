package com.project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class SignupModel{
	@Id
	private String uid;
	
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}

	private String signupUsername;
	private String signupMail;
	private String signupPassword;
	private String signupType;
	
	public String getSignupUsername() {
		return signupUsername;
	}
	public void setSignupUsername(String signupUsername) {
		this.signupUsername = signupUsername;
	}
	public String getSignupMail() {
		return signupMail;
	}
	public void setSignupMail(String signupMail) {
		this.signupMail = signupMail;
	}
	public String getSignupPassword() {
		return signupPassword;
	}
	public void setSignupPassword(String signupPassword) {
		this.signupPassword = signupPassword;
	}
	public String getSignupType() {
		return signupType;
	}
	public void setSignupType(String signupType) {
		this.signupType = signupType;
	}
	
	@Override
	public String toString() {
		return "SignupModel [signupUsername=" + signupUsername + ", signupMail=" + signupMail + ", signupPassword="
				+ signupPassword + "]";
	}
	
}
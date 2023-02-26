package com.project.serviceInt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.model.SignupModel;
import com.project.repo.SignupRepo;
import com.project.service.SignupService;

@Service
public class SignupServiceInt implements SignupService
{

	@Autowired
	private SignupRepo signupRepo;

	@Override
	public SignupModel createAccount(SignupModel signupModel) {
		return signupRepo.save(signupModel);
	}
}
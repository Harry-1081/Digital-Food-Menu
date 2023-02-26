package com.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.model.SignupModel;


public interface SignupRepo extends JpaRepository<SignupModel, String>
{

}
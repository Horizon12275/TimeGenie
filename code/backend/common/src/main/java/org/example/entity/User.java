package org.example.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler","events","password"})
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String email;
    private String username;
    private String password;
    private roleT role;
    private Integer sleep_schedule;
    private Integer identity;
    private Integer challenge;

    public enum identityT{
        Student,Office_Worker,Freelancer,Homemaker,Entrepreneur,Other
    }
    public enum sleepT{
        less_than_six,six_to_eight,eight_to_ten,more_than_ten
    }
    public enum challengeT{
        Inability_to_Concentrate,Too_Many_Tasks,Lack_of_Prioritization,Confusing_Schedule,Other
    }
    public enum roleT {
        user,admin
    }
}
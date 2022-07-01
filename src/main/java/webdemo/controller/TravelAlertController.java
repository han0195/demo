package webdemo.controller;

import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import webdemo.service.TravelAlertService;

import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/travel")
public class TravelAlertController {

    @Autowired
    TravelAlertService travelAlertService;

    @GetMapping("/gettravel")
    public void getTravelAlert(HttpServletResponse response){
        try {
            response.setCharacterEncoding("UTF-8");
            response.setContentType("application/json");
            response.getWriter().print(travelAlertService.getTravelAlert());
        }catch (Exception e){
            System.out.println("JSON 읽어오기 컨트롤에러: " + e);
        }
    }

}

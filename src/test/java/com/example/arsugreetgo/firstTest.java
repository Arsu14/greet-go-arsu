package com.example.arsugreetgo;


import com.example.arsugreetgo.resource.StudentResource;
import org.apache.ibatis.type.MappedTypes;
import org.hamcrest.Matchers;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;

import static org.hamcrest.core.StringContains.containsString;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.content;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.assertj.core.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class firstTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private StudentResource studentResource;

    @Test
    public void test() throws Exception{
        assertThat(studentResource).isNotNull();
    }

//    @Test
//    public void test1() throws Exception{
//        this.mockMvc.perform(get("/"))
//                .andDo(print())
//                .andExpect(status().isOk())
//                .andExpect((ResultMatcher) content().string(containsString("Arsu Project")));
//    }
//это самый простой тест

}

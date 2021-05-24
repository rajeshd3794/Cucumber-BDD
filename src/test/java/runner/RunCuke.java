package runner;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;


//@CucumberOptions(features= {"src/test/resources/features"}, glue= {"steps"},plugin = {
//		"html:target/cucumber-html-report", "json:target/cucumber-reports/cucumber.json",
//		"junit:target/cucumber-reports/cucumber.xml",
//		"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"})

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/test/resources/features"}, plugin = {
		"pretty", "html:target/cucumber",
		"json:C:\\Users\\rajes\\Desktop\\Cucumber_BDD_Test_Automation_Demo\\target\\cucumber-reports\\cucumber.json"})
public class RunCuke { //extends AbstractTestNGCucumberTests {

}

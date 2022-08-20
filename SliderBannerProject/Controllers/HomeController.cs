using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SliderBannerProject.Model.Entity;

namespace SliderBannerProject.Controllers
{
    public class HomeController : Controller
    {
        ProjectEntities db = new ProjectEntities();
        public ActionResult Index()
        {
            var values = db.Table_Slider.ToList();
            return View(values);
        }

        public ActionResult About()
        {
            var values = db.Table_Slider.ToList();
            ViewBag.Message = "Your application description page.";

            return View(values);
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
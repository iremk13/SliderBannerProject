using SliderBannerProject.Model.Entity;
using SliderBannerProject.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SliderBannerProject.Controllers
{
    public class TestController : Controller
    {
        // GET: Test
        ProjectEntities db = new ProjectEntities();
        GenericRepository<Table_Slider> repo = new GenericRepository<Table_Slider>();
        public ActionResult Index()
        {
            var values = db.Table_Slider.ToList();
            return View(values);
        }

        [HttpGet]

        public ActionResult AddInfo()
        {
            return View();
        }

        [HttpPost]

        public ActionResult AddInfo(Table_Slider par)
        {
            repo.Add(par);
            return RedirectToAction("index");
        }

        [HttpGet]

        public ActionResult UpdateInfo(int id)
        {
            var t = repo.Find(a => a.ID == id);
            return View(t);
        }

        [HttpPost]

        public ActionResult UpdateInfo(Table_Slider par)
        {
            Table_Slider t = repo.Find(a => a.ID == par.ID);
            t.SliderInfo1 = par.SliderInfo1;
            t.SliderPhoto = par.SliderPhoto;
            repo.Update(t);
            return RedirectToAction("index");
        }
    }
}
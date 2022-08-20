using SliderBannerProject.Model.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace SliderBannerProject.Repository
{
    public class GenericRepository<T> where T:class,new()
    {
        ProjectEntities db = new ProjectEntities();


        public List<T> List()
        {
            return db.Set<T>().ToList();
        }

        public void Add(T par)
        {
            db.Set<T>().Add(par);
            db.SaveChanges();
        }

        public T Find(Expression<Func<T,bool>> where)
        {
            return db.Set<T>().FirstOrDefault(where);
        }

        public void Update(T par)
        {
            db.SaveChanges();
        }
    }
}
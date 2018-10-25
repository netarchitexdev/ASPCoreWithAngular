using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPCoreWithAngular.Utility
{
    public class JsonHelper
    {
        public static JObject WrapJsonContainer(string json, JContainer oContainer)
        {
            var jsonObject = JObject.Parse(json);
            return new JObject(oContainer);
        }
    }
}

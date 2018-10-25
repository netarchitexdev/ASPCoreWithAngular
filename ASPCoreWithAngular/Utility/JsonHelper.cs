using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPCoreWithAngular.Utility
{
    public class JsonHelper
    {
        public static JObject WrapJson(string jsonToWrap)
        {
            var oToWrap = JObject.Parse(jsonToWrap);
            return new JObject(oToWrap);
        }
    }
}

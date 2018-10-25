using ASPCoreWithAngular.Utility;
using Newtonsoft.Json.Linq;
using System;
using Xunit;

namespace UnitTest
{
    [Trait("Category", "Unit")]
    public class JsonHelperTests
    {
        [Fact]
        public void CanWrapJson()
        {
            var expected = JObject.Parse(Properties.Resources.TestSnipperNestedChild).ToString(Newtonsoft.Json.Formatting.None);

            var json = Properties.Resources.TestSnippetFull;
            var oParent = JObject.Parse(json);
            var oChild = oParent["arrayOfObj"].Parent;
            var o = new JObject(oChild);

            var actual = o.ToString(Newtonsoft.Json.Formatting.None);

            Assert.Equal(actual, expected);
        }

        [Fact]
        public void WrapJson_CanWrapValidJson()
        {
            var expected = JObject.Parse(Properties.Resources.TestSnipperNestedChild).ToString(Newtonsoft.Json.Formatting.None);

            var json = Properties.Resources.TestSnippetFull;
            var jsonToWrap = JObject.Parse(json)["arrayOfObj"].Parent.ToString();
            var o = JsonHelper.WrapJson(jsonToWrap);

            var actual = o.ToString(Newtonsoft.Json.Formatting.None);

            Assert.Equal(actual, expected);
        }
    }
}

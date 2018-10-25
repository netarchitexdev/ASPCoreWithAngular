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
        public void CanWrapJsonContainer()
        {
            var expected = JObject.Parse(Properties.Resources.TestSnipperNestedChild).ToString(Newtonsoft.Json.Formatting.None);

            var json = Properties.Resources.TestSnippetFull;
            var jsonObject = JObject.Parse(json);
            var oContainer = jsonObject["arrayOfObj"].Parent;
            var o = new JObject(oContainer);

            var actual = o.ToString(Newtonsoft.Json.Formatting.None);

            Assert.Equal(actual, expected);
        }

        [Fact]
        public void WrapJson_JsonContainerIsWrapped()
        {
            var expected = JObject.Parse(Properties.Resources.TestSnipperNestedChild).ToString(Newtonsoft.Json.Formatting.None);

            var json = Properties.Resources.TestSnippetFull;
            var oContainer = JObject.Parse(json)["arrayOfObj"].Parent;
            var o = JsonHelper.WrapJsonContainer(json, oContainer);

            var actual = o.ToString(Newtonsoft.Json.Formatting.None);

            Assert.Equal(actual, expected);
        }
    }
}

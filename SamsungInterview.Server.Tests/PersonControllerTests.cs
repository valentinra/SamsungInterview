using SamsungInterview.Server.Controllers;

namespace SamsungInterview.Server.Tests
{
    public class PersonControllerTests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void GetPersons_ReturnsAnIEnumerable_NotNull()
        {
            // Arrange
            var controller = new PersonController();

            // Act
            var result = controller.Get();

            // Assert
            Assert.That(result, Is.Not.Null);
            Assert.That(result, Is.InstanceOf<IEnumerable<Person>>());
        }
    }
}
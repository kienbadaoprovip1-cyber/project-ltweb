namespace GameStoreAPI.Models {
    public class Game {
        public int Id { get; set; }
        public required string Title { get; set; }
        public decimal Price { get; set; }
    }
}
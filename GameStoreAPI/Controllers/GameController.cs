using Microsoft.AspNetCore.Mvc;
using GameStoreAPI.Models;

[ApiController]
[Route("api/[controller]")]
public class GameController : ControllerBase {
    // Giả lập database
    private static List<Game> games = new List<Game> { 
    new Game { Id = 1, Title = "Cyber Adventure", Price = 29.99m },
    new Game { Id = 2, Title = "Racing Pro", Price = 19.99m },
    new Game { Id = 3, Title = "Fantasy RPG", Price = 39.99m },
    new Game { Id = 4, Title = "Zombie Survival", Price = 24.99m },
    new Game { Id = 5, Title = "Space Explorer", Price = 49.99m },
    new Game { Id = 6, Title = "City Builder", Price = 15.50m }
};

    [HttpGet] // GET: Lấy danh sách
    public IActionResult GetAll() => Ok(games);

    [HttpPost] // POST: Thêm mới
    public IActionResult Add(Game newGame) {
        newGame.Id = games.Count + 1;
        games.Add(newGame);
        return Ok(newGame);
    }

    [HttpPut("{id}")] // PUT: Sửa thông tin
    public IActionResult Update(int id, Game updatedGame) {
        var game = games.FirstOrDefault(g => g.Id == id);
        if (game == null) return NotFound();
        game.Title = updatedGame.Title;
        game.Price = updatedGame.Price;
        return Ok(game);
    }

    [HttpDelete("{id}")] // DELETE: Xóa game
    public IActionResult Delete(int id) {
        var game = games.FirstOrDefault(g => g.Id == id);
        if (game == null) return NotFound();
        games.Remove(game);
        return NoContent();
    }
}
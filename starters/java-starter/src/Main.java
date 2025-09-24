import java.util.HashMap;
import java.util.Map;

public class Main {

	static void getItems() {
		System.out.println("00000000001:getItems");
	}

	public static void main(String[] args) {
		Map<String, Integer> items = new HashMap<>();
		items.put("Spielberg", 1001);
		items.put("Cameron", 1001);
		System.out.println("00000000001:" + items);

//		String result = "";
//		result = Lib.getItems();
//		System.out.println("00000000001:" + result);
//		getItems();
//		System.out.println("00000000001");
	}

}

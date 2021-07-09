import java.util.Scanner;
import java.io.FileNotFoundException;
import java.io.File;
import java.util.InputMismatchException;

public class Main {
	public static void main(String[] args) throws Exception {
		//* AtCoder提出用
		try{
			Scanner scan = new Scanner(System.in);
			int a = scan.nextInt();
			int b = scan.nextInt();
			scan.close();

			int ans = a + b;
			ans = Math.max(ans, a - b);
			ans = Math.max(ans, a * b);
			System.out.println(ans);

		}catch(InputMismatchException e){
			//* ファイル読み込み用
			try {

				File file = new File("../txt/A.txt");
				Scanner scanner = new Scanner(file);
				// while (scanner.hasNext()){
					// 	String dat = scanner.next();
					// 	System.out.println(dat);
					// }
					int a = scanner.nextInt();
					int b = scanner.nextInt();
					scanner.close();
					
					int ans = a + b;
					ans = Math.max(ans, a - b);
					ans = Math.max(ans, a * b);
					System.out.println(ans);

				} catch(FileNotFoundException f) {
					System.out.println(f);
					System.out.println("----------------");
					System.out.println(e);
				}
		}
	}
}

import 'package:dio/dio.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

final dio = Dio();
void configureDio() {
  dio.options.baseUrl = 'https://fisipractica-backend.onrender.com';
  dio.options.connectTimeout = Duration(seconds: 10);
  dio.options.receiveTimeout = Duration(seconds: 5);
}

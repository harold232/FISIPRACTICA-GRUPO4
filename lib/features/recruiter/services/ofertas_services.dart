import 'package:dio/dio.dart';
import 'package:flutter_app/core/utils/dio.dart';
import 'package:flutter_app/core/utils/session_manager.dart';
import 'package:logger/logger.dart';

final logger = Logger();

class OfertasServices {
  static Future<List<Map<String, dynamic>>> getOfertas() async {
    try {
      String? token = await SessionManager().getAuthToken();
      Response response = await dio.get(
        'https://fisipractica-backend.onrender.com/job',
        options: Options(
          headers: {
            'Authorization': 'Bearer $token',
          },
        ),
      );
      logger.d(response);
      List<Map<String, dynamic>> ofertas = [];
      for (var oferta in response.data) {
        ofertas.add({
          "id": oferta['id'],
          "titulo": oferta['title'],
          "empresa": oferta['company']['name'],
          "empresa_id": oferta['company']['id'],
          "empresa_descripcion": oferta['company']['description'],
          "empresa_sitioweb": oferta['company']['website'],
          "empresa_locacion": oferta['company']['location'],
          "descripcion": oferta['description'],
          "ubicacion": oferta['location'],
          "salario": oferta['salary'],
          "oferta_requerimientos": oferta['job_requirements'],
          "oferta_funciones": oferta['job_functions'],
          "disponibilidad": 'Inmediata',
          "url_pdf": oferta['url_job_pdf'],
          "hiring": oferta['hiring'],
          "create_date": oferta['create_date'],
          "update_date": oferta['update_date'],
          "recruiter": oferta['recruiter'],
        });
      }
      return ofertas;
    } catch (e) {
      logger.e(e);
      return [];
    }
  }

  static Future<List<Map<String, dynamic>>> getOfertasByRecruiter(
      String recruiterId) async {
    try {
      String? token = await SessionManager().getAuthToken();
      Response response = await dio.get(
        'https://fisipractica-backend.onrender.com/job/recruiter/$recruiterId',
        options: Options(
          headers: {
            'Authorization': 'Bearer $token',
          },
        ),
      );
      logger.d(response);
      List<Map<String, dynamic>> ofertas = [];
      for (var oferta in response.data) {
        ofertas.add({
          "id": oferta['id'],
          "titulo": oferta['title'],
          "empresa": oferta['company']['name'],
          "empresa_id": oferta['company']['id'],
          "empresa_descripcion": oferta['company']['description'],
          "empresa_sitioweb": oferta['company']['website'],
          "empresa_locacion": oferta['company']['location'],
          "descripcion": oferta['description'],
          "ubicacion": oferta['location'],
          "salario": oferta['salary'],
          "oferta_requerimientos": oferta['job_requirements'],
          "oferta_funciones": oferta['job_functions'],
          "disponibilidad": 'Inmediata',
          "url_pdf": oferta['url_job_pdf'],
          "hiring": oferta['hiring'],
          "create_date": oferta['create_date'],
          "update_date": oferta['update_date'],
          "recruiter": oferta['recruiter'],
        });
      }
      return ofertas;
    } catch (e) {
      logger.e(e);
      return [];
    }
  }
}

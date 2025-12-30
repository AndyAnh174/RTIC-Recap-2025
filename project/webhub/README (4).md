
# WebHub Backend - Hướng dẫn cài đặt và chạy

## Yêu cầu hệ thống

- Java 17
- Maven 3.8+
- Docker
- Git

## Cài đặt

1. **Clone repository**

```bash
git clone https://git.hcmutertic.com/web-hub/backend/backend.git
cd backend
git checkout develop
git pull origin develop
```

2. **Cấu hình database**

Linux
```
sudo docker compose -f postgreSQL.yml up -d --build
```
Windows

```
docker compose -f postgreSQL.yml up -d --build
```
**Reset database**
```
docker volume rm backend_postgres_data
sudo docker compose -f postgreSQL.yml up -d --build
```
**Thao tác với DB**
```
docker exec -it rtic_postgres bash
psql -U rtic -d rtic_db
```

**Lưu ý**: Mặc định đã tạo 1 bảng user, 1 user có email là **test@example.com**, Pass là **123**
3. **Mail**
```
docker run -d -p 1025:1025 -p 8025:8025 mailhog/mailhog
```
4**Build toàn bộ project**



```bash
mvn clean install -DskipTests
```

## Chạy dự án

```bash
mvn spring-boot:run
```

Ứng dụng sẽ chạy mặc định tại : http://localhost:8080

## Swagger UI

Giao diện tài liệu API:

```
http://localhost:8080/swagger-ui/index.html
```

## Production stage

Build và deploy:
```
sudo docker compose up --build
```
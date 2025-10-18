# Docker Compose Project - Task Manager Application

A simple full-stack application demonstrating Docker and Docker Compose with a Node.js backend and vanilla JavaScript frontend.



## 📋 Project Overview

This project consists of:
- **Backend**: Node.js/Express REST API (Port 3000)
- **Frontend**: Static HTML/CSS/JavaScript served by Nginx (Port 8080)
- **Docker Compose**: Orchestrates both services with networking and health checks

## 🏗️ Architecture

```
┌─────────────────────────────────────────┐
│         Docker Compose Network          │
│                                         │
│  ┌──────────────┐    ┌──────────────┐  │
│  │   Frontend   │───▶│   Backend    │  │
│  │   (Nginx)    │    │  (Node.js)   │  │
│  │   Port 8080  │    │   Port 3000  │  │
│  └──────────────┘    └──────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

## 🚀 Features

- ✅ RESTful API with CRUD operations
- ✅ Modern, responsive UI
- ✅ Dockerized services
- ✅ Docker Compose orchestration
- ✅ Health checks for both services
- ✅ Automatic restart policies
- ✅ Bridge network for service communication

## 📸 Screenshots

### Docker Compose Running

![Docker Compose Running](screenshots/Screenshot%202025-10-18%20114657.png)

*Docker Compose successfully building and running both backend and frontend containers*

## 📁 Project Structure

```
docker_ComposeProject/
├── backend/
│   ├── server.js           # Express server
│   ├── package.json        # Backend dependencies
│   ├── Dockerfile         # Backend container config
│   └── .dockerignore      # Files to exclude from build
├── frontend/
│   ├── index.html         # Main HTML file
│   ├── style.css          # Styling
│   ├── app.js             # Frontend JavaScript
│   ├── nginx.conf         # Nginx configuration
│   ├── Dockerfile         # Frontend container config
│   └── .dockerignore      # Files to exclude from build
├── docker-compose.yml     # Docker Compose configuration
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## 🛠️ Prerequisites

Before running this project, ensure you have installed:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (version 20.10 or higher)
- [Git](https://git-scm.com/downloads)

Verify installation:
```bash
docker --version
docker-compose --version
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd docker_ComposeProject
```

### 2. Build and Run with Docker Compose

```bash
# Build and start all services in detached mode
docker-compose up --build -d
```

This command will:
- Build Docker images for backend and frontend
- Create a bridge network
- Start both containers
- Run health checks

### 3. Verify Services are Running

```bash
# Check container status
docker-compose ps

# View logs
docker-compose logs

# View specific service logs
docker-compose logs backend
docker-compose logs frontend
```

### 4. Access the Application

- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:3000
- **API Health Check**: http://localhost:3000/

### 5. Test the API

```bash
# Get all tasks
curl http://localhost:3000/api/tasks

# Create a new task
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"New Task"}'
```

## 🔧 Docker Commands Reference

### Start Services
```bash
docker-compose up -d                    # Start in detached mode
docker-compose up --build              # Rebuild and start
docker-compose up -d --force-recreate  # Force recreate containers
```

### Stop Services
```bash
docker-compose stop                    # Stop containers
docker-compose down                    # Stop and remove containers
docker-compose down -v                 # Stop and remove volumes
```

### View Information
```bash
docker-compose ps                      # List running containers
docker-compose logs -f                 # Follow logs (live)
docker-compose logs --tail=50 backend  # Last 50 lines from backend
docker-compose top                     # Display running processes
```

### Rebuild Services
```bash
docker-compose build                   # Rebuild all images
docker-compose build --no-cache        # Rebuild without cache
```

### Execute Commands in Containers
```bash
docker-compose exec backend sh         # Open shell in backend container
docker-compose exec frontend sh        # Open shell in frontend container
```

## 📸 Taking Screenshots

### Method 1: Windows Snipping Tool
1. Press `Windows + Shift + S`
2. Capture the relevant window/area
3. Save as PNG or JPG

### Method 2: PowerShell
```powershell
# Take screenshot of docker-compose ps output
docker-compose ps | Out-File -FilePath "screenshots/docker-ps.txt"

# Export logs
docker-compose logs > screenshots/docker-logs.txt
```

### Method 3: Browser Developer Tools
1. Open http://localhost:8080 in browser
2. Press `F12` to open DevTools
3. Click the Network tab
4. Interact with the app
5. Take screenshots showing API calls

### Recommended Screenshots

Create a `screenshots/` folder with:

1. **docker-compose-build.png** - Building the images
2. **docker-compose-ps.png** - Running containers
3. **docker-compose-logs.png** - Container logs
4. **frontend-app.png** - Application in browser
5. **api-response.png** - API testing (Postman/curl)
6. **docker-desktop.png** - Docker Desktop showing containers

## 🐙 GitHub Repository Setup

### 1. Initialize Git Repository (if not done)

```bash
# Initialize repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Docker Compose project with backend and frontend"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name: `docker-compose-task-manager`
4. Description: "Simple full-stack app with Docker Compose"
5. Keep it **Public**
6. **Do NOT** initialize with README (we have one)
7. Click **Create repository**

### 3. Push to GitHub

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/docker-compose-task-manager.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Add Screenshots

```bash
# Create screenshots directory
mkdir screenshots

# Add your screenshots to the folder
# Then commit and push

git add screenshots/
git commit -m "Add screenshots"
git push
```

### 5. Update README with Screenshots

Add this section to your GitHub README:

```markdown
## 📸 Screenshots

### Docker Compose Running
![Docker PS](screenshots/docker-compose-ps.png)

### Application Interface
![Frontend](screenshots/frontend-app.png)

### Container Logs
![Logs](screenshots/docker-compose-logs.png)
```

## 🧪 API Endpoints

### Backend API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create new task |
| PUT | `/api/tasks/:id` | Toggle task completion |
| DELETE | `/api/tasks/:id` | Delete task |

### Example Requests

```bash
# Health check
curl http://localhost:3000/

# Get all tasks
curl http://localhost:3000/api/tasks

# Create task
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn Kubernetes"}'

# Toggle task (mark as complete/incomplete)
curl -X PUT http://localhost:3000/api/tasks/1

# Delete task
curl -X DELETE http://localhost:3000/api/tasks/1
```

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F

# Or change ports in docker-compose.yml
```

### Containers Not Starting

```bash
# View detailed logs
docker-compose logs

# Rebuild without cache
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Frontend Can't Connect to Backend

1. Check if backend is running: `docker-compose ps`
2. Verify backend logs: `docker-compose logs backend`
3. Test backend directly: `curl http://localhost:3000/`
4. Check browser console for CORS errors

### Permission Denied Errors (Linux/Mac)

```bash
# Add your user to docker group
sudo usermod -aG docker $USER

# Log out and log back in
```

## 🔒 Security Considerations

This is a development/demo project. For production:

1. **Environment Variables**: Use `.env` files for sensitive data
2. **CORS**: Configure CORS properly (not `*`)
3. **HTTPS**: Use SSL/TLS certificates
4. **Authentication**: Add user authentication
5. **Database**: Use persistent database (PostgreSQL, MongoDB)
6. **Volumes**: Use Docker volumes for data persistence
7. **Networks**: Configure network security policies

## 🚀 Next Steps

Enhance this project by:

- [ ] Add database (MongoDB/PostgreSQL)
- [ ] Implement user authentication
- [ ] Add data persistence with volumes
- [ ] Create production Dockerfiles
- [ ] Add Nginx reverse proxy
- [ ] Implement CI/CD pipeline
- [ ] Deploy to cloud (AWS, GCP, Azure)
- [ ] Add testing (Jest, Mocha)
- [ ] Implement logging and monitoring

## 📚 Learning Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Node.js Docker Best Practices](https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md)
- [Nginx Documentation](https://nginx.org/en/docs/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⭐ Show Your Support

Give a ⭐️ if this project helped you learn Docker and Docker Compose!

---

**Note**: Make sure to replace `<your-repository-url>` and `YOUR_USERNAME` with your actual GitHub information before submitting.

#   D o c k e r - C o m p o s e - T a s k 
 
 
